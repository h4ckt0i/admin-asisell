import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import TextAreaSection from "../section/textAreaSection/textAreaSection";
import SelectSection from "~/components/section/selectSection/selectSection";
import { fetchApi } from "~/utils/common";
import * as locationSlice from "~/store/common/slice/locationSlice";

import styles from "./addressChoice.module.scss";
import generalStyles from "~/styles/generalStyle.module.scss";

function AddressChoice({ title, setAddress, isDisabled, className }) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [city, setCity] = useState({});
  const [district, setDistrict] = useState({});
  const [ward, setWard] = useState({});
  const [street, setStreet] = useState("");

  const districtRef = useRef();
  const wardRef = useRef();
  const streetRef = useRef();

  const dispatch = useDispatch();

  // const getObject = (value, setList) => {
  //   const list = value.map((item) => ({
  //     ...item,
  //     label: item.province_name,
  //   }));
  //   setList(list);
  // };

  const handleCity = (e) => {
    if (city !== undefined) {
      districtRef.current.clearValue();
      wardRef.current.clearValue();
      setWards([]);
      setDistrict("");
      setWard("");
    }
  };

  const handleDistrict = (e) => {
    if (district !== undefined) {
      wardRef.current.clearValue();
      setWards([]);
      setWard("");
    }
  };

  const selectCity = (value) => {
    handleCity();
    setCity(value);
  };

  const selectDistrict = (value) => {
    handleDistrict();
    setDistrict(value);
  };

  useEffect(() => {
    const getObject = (value, setList) => {
      const list = value.map((item) => ({
        ...item,
        label: item.province_name,
      }));
      setList(list);
    };

    const getAllCities = () => fetchApi(locationSlice.getAllCities(), dispatch);

    getAllCities().then((result) => getObject(result.results, setCities));
  }, []);

  useEffect(() => {
    const cityId = city.province_id;

    const getObject = (value, setList) => {
      const list = value.map((item) => ({
        ...item,
        label: item.district_name,
      }));
      setList(list);
    };

    const getDistricts = () =>
      fetchApi(locationSlice.getDistrictsByCity(cityId), dispatch);

    cityId &&
      getDistricts().then((result) => getObject(result.results, setDistricts));
  }, [city]);

  useEffect(() => {
    const districtId = district.district_id;

    const getObject = (value, setList) => {
      const list = value.map((item) => ({
        ...item,
        label: item.ward_name,
      }));
      setList(list);
    };

    const getWards = () =>
      fetchApi(locationSlice.getWardsByDistrict(districtId), dispatch);

    districtId &&
      getWards().then((result) => getObject(result.results, setWards));
  }, [district]);

  useEffect(() => {
    const selectedWard = ward.ward_name || "";
    const selectedDistrict = district.district_name || "";
    const selectedCity = city.province_name || "";
    const address =
      (street && `${street}, `) +
      (selectedWard && `${selectedWard}, `) +
      (selectedDistrict && `${selectedDistrict}, `) +
      (selectedCity && `${selectedCity}`);

    setAddress(address);
  }, [city, district, ward, street]);

  return (
    <div className={clsx(styles.container, className)}>
      <span className={generalStyles.rightSideSubTitle}>{title}</span>
      <div className={styles.addressSection}>
        <SelectSection
          className={styles.addressInput}
          placeholder="Chọn Tỉnh/Thành phố"
          options={cities}
          setState={selectCity}
          isClearable={false}
          isDisabled={isDisabled}
        />
        <SelectSection
          ref={districtRef}
          className={styles.addressInput}
          placeholder="Chọn Quận/Huyện"
          options={districts}
          setState={selectDistrict}
          isClearable={false}
          isDisabled={isDisabled}
        />
        <SelectSection
          ref={wardRef}
          className={styles.addressInput}
          placeholder="Chọn Phường/Xã"
          options={wards}
          setState={setWard}
          isClearable={false}
          isDisabled={isDisabled}
        />
      </div>
      <TextAreaSection
        className={styles.textArea}
        rows={2}
        ref={streetRef}
        placeholder="Nhập số nhà, tên đường, ..."
        value={street}
        setState={setStreet}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default AddressChoice;
