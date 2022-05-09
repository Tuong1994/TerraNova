import { domain } from "../../configs/setting";

export const commentPaths = {
  getCommentList: `${domain}/api/commentManagement/getCommentList`,
  createComment: `${domain}/api/commentManagement/createComment`,
  updateComment: `${domain}/api/commentManagement/updateComment`,
  removeComment: `${domain}/api/commentManagement/removeComment`,
};
