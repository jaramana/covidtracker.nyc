##Load package
library(raster)
library(rgdal)
library(tidyverse)
library(dplyr)
library(readr)
library(jsonlite)

##Set working directory
setwd("C:/Users/jaramana/Desktop/website/covidtracker.nyc/data")

##Spatial Visualization--

##Link to DOHMH Github Data
# urlfile="https://raw.githubusercontent.com/nychealth/coronavirus-data/master/tests-by-zcta.csv"

urlfile="https://raw.githubusercontent.com/nychealth/coronavirus-data/master/data-by-modzcta.csv"



##Load data
p <- shapefile("raw/nyu_2451_34509_filtered/nyu_2451_34509_filtered")
d <- read_csv(url(urlfile))
c <- read_csv("raw/cdc_svi_zcta_crosswalk.csv")
n <- read_csv("raw/zcta_neighborhood_names.csv")


##Remove unncessary columns
p@data <- p@data %>% select(1)

##Remove unncessary columns
d <- d %>% select(1,2,3)

##Rename column header to merge
d <- d %>% rename(zcta = MODIFIED_ZCTA)

##Sum duplicate zipcodes (sometimes happens)
# d <- aggregate(list(d$'Positive', d$'Total'), by = list(d$'zcta'), sum)
# d <- rename(d, 'zcta' = 1)
# d <- rename(d, 'Positive' = 2)
# d <- rename(d, 'Total' = 3)
# c <- rename(c, 'population' = 4)


##Merge Zip Code shapefile with Testing data (DOHMH)
m <- merge(p, d, by='zcta')

##Merge Spatial data with neighborhood names
# m <- merge(m, n, by='zcta') For some reason I created this at one point, doesn't seem necessary right now.

##Merge Spatial data with census data
m <- merge(m, c, by='zcta')

m$PERCENT_POSITIVE[ is.na(m$PERCENT_POSITIVE)] = 0
m$COVID_CASE_RATE[ is.na(m$COVID_CASE_RATE)] = 0
m$COVID_DEATH_COUNT[ is.na(m$COVID_DEATH_COUNT)] = 0
m$TOTAL_COVID_TESTS[ is.na(m$TOTAL_COVID_TESTS)] = 0


# ##Positive per capita
# m$positiveperthou <- (m$Positive / m$population)*1000
# m$positiveperthou[ is.na(m$positiveperthou)] = 0
# m$positiveperthou <- format(round(m$positiveperthou, 2), nsmall = 2)
# m$positiveperthou <- as.numeric(m$positiveperthou)
# 
# ##Total per capita
# m$totalperthou <- (m$Total / m$population)*1000
# m$totalperthou[is.na(m$totalperthou)] = 0
# m$totalperthou <- format(round(m$totalperthou, 2), nsmall = 2)
# m$totalperthou <- as.numeric(m$totalperthou)

##Assign CRS
m <- spTransform(m, CRS("+proj=longlat +datum=WGS84 +init=epsg:4269"))

##Write as GeoJSON
writeOGR(m, "covid_nyc.json", layer="merged", driver="GeoJSON", overwrite_layer=TRUE)

##Get quantiles for breaks / legend
head(d)

quantile(m$COVID_DEATH_RATE, probs = seq(0, 1, .20))




##Chart--

##Link to DOHMH Github Data
urlfile="https://raw.githubusercontent.com/nychealth/coronavirus-data/master/case-hosp-death.csv"

##Load data
d <- read_csv(url(urlfile))

##Change NA to 0
d[is.na(d)] <- 0

##Rename column header (sometimes DOHMH messes this up)
d <- rename(d, 'DATE_OF_INTEREST' = 1)
d <- rename(d, 'NEW_COVID_CASE_COUNT' = 2)
d <- rename(d, 'HOSPITALIZED_CASE_COUNT' = 3)
d <- rename(d, 'DEATH_COUNT' = 4)


##Create new columns with cumulative sums
d[,"NEW_COVID_CASE_COUNT_CUM"] <- cumsum(d$NEW_COVID_CASE_COUNT)
d[,"HOSPITALIZED_CASE_COUNT_CUM"] <- cumsum(d$HOSPITALIZED_CASE_COUNT)
d[,"DEATH_COUNT_CUM"] <- cumsum(d$DEATH_COUNT)

##Write as json
write_json(d, "case-hosp-death_cumulative.json", pretty = TRUE)

##Write as csv for public use
write.csv(d, "../data/case-hosp-death_cumulative.csv", row.names = FALSE)

