##Load package
library(raster)
library(rgdal)
library(tidyverse)
library(dplyr)
library(readr)
library(jsonlite)

##Set working directory
setwd("C:/Users/jaramana/Desktop/COVID Tracker NYC")



##Spatial Visualization--

##Link to DOHMH Github Data
urlfile="https://raw.githubusercontent.com/nychealth/coronavirus-data/master/tests-by-zcta.csv"

##Load data
p <- shapefile("data/raw/nyu_2451_34509/nyu_2451_34509")
d <- read_csv(url(urlfile))
c <- read_csv("data/raw/ACS2015_zctaallvars_modified.csv")

##Remove unncessary columns
p@data <- p@data %>% select(1)

##Remove unncessary columns
d <- d %>% select(1,2,3)

##Rename column header to merge
d <- d %>% rename(zcta = MODZCTA)

##Merge Zip Code shapefile with Testing data (DOHMH)
m <- merge(p, d, by='zcta')

##Merge Spatial data with census data
m <- merge(m, c, by='zcta')

m$Positive[ is.na(m$Positive)] = 0
m$Total[ is.na(m$Total)] = 0

##Positive per capita
m$positiveperthou <- (m$Positive / m$population)*1000
m$positiveperthou[ is.na(m$positiveperthou)] = 0
m$positiveperthou <- format(round(m$positiveperthou, 2), nsmall = 2)
m$positiveperthou <- as.numeric(m$positiveperthou)

##Total per capita
m$totalperthou <- (m$Total / m$population)*1000
m$totalperthou[is.na(m$totalperthou)] = 0
m$totalperthou <- format(round(m$totalperthou, 2), nsmall = 2)
m$totalperthou <- as.numeric(m$totalperthou)

##Assign CRS
m <- spTransform(m, CRS("+proj=longlat +datum=WGS84 +init=epsg:4269"))

##Write as GeoJSON
writeOGR(m, "data/covid_nyc.js", layer="merged", driver="GeoJSON", overwrite_layer=TRUE)

##Get quantiles for breaks / legend
quantile(m$Positive, probs = seq(0, 1, .20))



##Chart--

##Link to DOHMH Github Data
urlfile="https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv"

##Load data
d <- read_csv(url(urlfile))

##Change NA to 0
d[is.na(d)] <- 0

##Create new columns with cumulative sums
d[,"NEW_COVID_CASE_COUNT_CUM"] <- cumsum(d$NEW_COVID_CASE_COUNT)
d[,"HOSPITALIZED_CASE_COUNT_CUM"] <- cumsum(d$HOSPITALIZED_CASE_COUNT)
d[,"DEATH_COUNT_CUM"] <- cumsum(d$DEATH_COUNT)

##Write as json
write_json(d, "data/case-hosp-death_cumulative.json", pretty = TRUE)

##Write as csv for public use
write.csv(d, "data/case-hosp-death_cumulative.csv", row.names = FALSE)

