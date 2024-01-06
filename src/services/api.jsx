import { api } from "./http_request.jsx";

export const WorkshopsRepository = {
  async getWorkshops() {
    const response = await api.get(`workshops/active`);
    const result = response.data;
    return result.workshops;
  },
  async getWorkshop(id) {
    const response = await api.get(`workshops/${id}`);
    const result = response.data;
    return result.workshop;
  },
  async getActiveWorkshops() {
    const response = await api.get(`workshops/active`);
    const result = response.data;
    return result.activeWorkshops;
  },
  async getWorkshopEnrollments(id) {
    const response = await api.get(`workshops/${id}/enrollments`);
    const result = response.data;
    return result.enrollments;
  },
  async getWorkshopEnrollment(id, enrollmentId) {
    const response = await api.get(
      `workshops/${id}/enrollments/${enrollmentId}`
    );
    const result = response.data;
    return result.enrollment;
  },
  async createWorkshopEnrollment(id, enrollment) {
    const response = await api.post(`workshops/${id}/enrollments`, enrollment);
    const result = response.data;
    return result.enrollment;
  },
  async updateWorkshopEnrollment(id, enrollmentId, enrollment) {
    const response = await api.put(
      `workshops/${id}/enrollments/${enrollmentId}`,
      enrollment
    );
    const result = response.data;
    return result.enrollment;
  },
  async deleteWorkshopEnrollment(id, enrollmentId) {
    const response = await api.delete(
      `workshops/${id}/enrollments/${enrollmentId}`
    );
    const result = response.data;
    return result.enrollment;
  },
};
