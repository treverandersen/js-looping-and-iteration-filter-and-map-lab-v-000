// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => drivers.revenue > parseInt(revenue));
    return result;
}
