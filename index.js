// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    const result = drivers.filter(drivers.revenue > revenue);
    return result;
}
