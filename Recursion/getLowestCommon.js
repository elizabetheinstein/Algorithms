const getLowestCommonManager = (topManager, reportOne, reportTwo) => {
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager
  }
  
const getOrgInfo = (manager, reportOne, reportTwo) => {
    let numImportantReports = 0
    for (const directReport of manager.directReports) {
        const orgInfo = getOrgInfo(directReport, reportOne, reportTwo)
        if (orgInfo.lowestCommonManager) return orgInfo
    numImportantReports += orgInfo.numImportantReports
    }
    if (manager === reportOne || manager === reportTwo) numImportantReports++
    const lowestCommonManager = numImportantReports === 2 ? manager : null
    return {lowestCommonManager, numImportantReports}
}