// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.map(driver => drivers.revenue > revenue);
    return result;
}
