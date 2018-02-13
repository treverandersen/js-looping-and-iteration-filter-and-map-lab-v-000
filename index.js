// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(driver => drivers.revenue > revenue);
    return result;
}
