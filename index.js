// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => driver.revenue > parseInt(revenue));
    return result;
}
