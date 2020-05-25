##Load package
library(raster)
library(rgdal)
library(tidyverse)
library(dplyr)
library (readr)

##Set working directory
setwd("C:/Users/jaramana/Desktop/COVID Tracker NYC")

p <- shapefile("data/raw/nyu_2451_34509/nyu_2451_34509")
c <- read_csv("data/raw/ACS2015_zctaallvars_modified.csv")

##Remove unncessary columns
p@data <- p@data %>% select(1)

##Merge Spatial data with census data
m <- merge(p, c, by='zcta')

##Assign CRS
m <- spTransform(m, CRS("+proj=longlat +datum=WGS84 +init=epsg:4269"))

##Write as GeoJSON
writeOGR(m, "data/ACS2015_zctaallvars.js", layer="merged", driver="GeoJSON", overwrite_layer=TRUE)



##addendum
##Get quantiles for breaks / legend
m_na <- m[!is.na(m$sdi_score),]
quantile(m_na$sdi_score, probs = seq(0, 1, .20))


