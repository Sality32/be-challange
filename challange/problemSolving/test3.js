const timeConversion = (s) => {
  const isAM = s.includes('AM');
  const arrS = s.split(':');
  console.log(`${isAM ? parseInt(arrS[0], 10):parseInt(arrS[0], 10) + 12}:${arrS[1]}:${parseInt(arrS[2], 10)}`)
}

timeConversion('07:14:45PM')