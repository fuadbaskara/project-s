import { METHODS, API_URIS, apiCall } from "./config";

export const TaskApi = {
  get: (data = {}) =>
    apiCall(METHODS.GET, API_URIS.TASK, "v1/acquisitions", data),
  getFreelancerContracts: (data = {}) =>
    apiCall(METHODS.GET, API_URIS.TASK, "v1/contracts", data),
  getFreelancerTaskReview: (data = {}) =>
    apiCall(METHODS.GET, API_URIS.TASK, "v1/task-reviews", data),
  getTaskDetail: taskId =>
    apiCall(METHODS.GET, API_URIS.TASK, `v1/tasks/${taskId}`),
  getForm: data =>
    apiCall(METHODS.POST, API_URIS.CMS, "v1/form/value", data),
  getDetail: (id, data) =>
    apiCall(METHODS.GET, API_URIS.TASK, `v1/acquisitions/${id}`, data),
  action: (id, type, data) =>
    apiCall(METHODS.PUT, API_URIS.TASK, `v1/acquisitions/${id}/${type}`, data)
};
