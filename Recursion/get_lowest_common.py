def get_lowest_common_manager(top_manager, report_one, report_two):
    return get_org_info(top_manager, reportOne, reportTwo).lowest_common_manager

def get_org_info(manager, one, two):
	reports = 0
    for report in manager.direct_reports:
        org_info = get_org_info(report, one, two)
        if org_info.lowest_common_manager is not None:
            return org_info
		reports += org_info.reports
	if manager == one or manager == two:
		reports += 1
	lowest_common_manager = manager if reports == 2 else None
	return Org_info(lowest_common_manager, reports)

class Org_info:
	def __init__(self, lowest_common_manager, reports):
		self.lowest_common_manager = lowest_common_manager
		self.reports = reports
    