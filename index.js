// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > revenue);
    return result;
}
function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}
function exactMatch(drivers, obj) {
  const matched = drivers.filter(driver => driver.name === obj || driver.revenue === obj);
  return matched;
}