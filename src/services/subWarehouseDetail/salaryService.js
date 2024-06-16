import httpRequest from "~/utils/httpRequest";

const pathName = "employee-salaries/";

export const getTotalSalaries = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/sub-warehouse/total-salaries/`,
      {
        params: {
          sub_warehouse: params,
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getTotalBonus = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/sub-warehouse/total-bonuses`,
      {
        params: {
          sub_warehouse: params,
        },
      }
    );
    return res.data;
  } catch (err) {}
};

export const getYearlySalaries = async (params) => {
  try {
    const res = await httpRequest.get(
      `${pathName}g/yearly-salaries/sub-warehouse/`,
      {
        params: {
          sub_warehouse: params.id,
          year: params.year,
        },
      }
    );
    return res.data;
  } catch (err) {}
};
