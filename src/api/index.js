// 删除列表元素
import http from "@/request/http";
export const deleteListElement = (url, id) => {
  return http({
    url: url + "?id=" + id,
    method: "delete",
  });
};
