import { domain } from "../../configs/setting";

export const ratePaths = {
  getRateList: `${domain}/api/rateManagement/getRateList`,
  getRateDetail: `${domain}/api/rateManagement/getRateDetail`,
  createRate: `${domain}/api/rateManagement/createRate`,
  updateRate: `${domain}/api/rateManagement/updateRate`,
  removeRate: `${domain}/api/rateManagement/removeRate`,
};
