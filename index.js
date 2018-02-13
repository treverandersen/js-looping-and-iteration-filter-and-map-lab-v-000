// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > revenue);
    return result;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const result = drivers.filter(driver => {
    const driverNames = [];
    if (driver.revenue > revenue) {
      driverNames.push(driver.name);
    }
    return driverNames;
  });
  return result;
}
