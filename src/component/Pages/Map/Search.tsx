import React from "react";
import { Input, List, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchLocations } from "../../../store/map/fetchSlice";
import { addLocation } from "../../../store/map/mapSlice";
import { AsyncState, debounce } from "../../../utils/constant";

const Search = React.memo(() => {
  const dispatch = useAppDispatch();

  const handleChange = debounce((value: string) => {
    dispatch(fetchLocations(value));
  }, 1000);

  const mapLocations = useAppSelector((state) => state.locations);

  return (
    <div className="search-box">
      <Input
        placeholder="search location"
        onChange={(e) => handleChange(e.target.value)}
        size="large"
      />
      <div className="loader">
        {mapLocations.status === AsyncState.LOADING && (
          <Spin indicator={<LoadingOutlined className="spin-font" spin />} />
        )}
        {mapLocations.data.length === 0 &&
          mapLocations.status === AsyncState.SUCCEEDED && (
            <div className="no-records">No Record</div>
          )}
      </div>

      {mapLocations.data.map((location) => (
        <List.Item
          key={location.label.text}
          className="list-item"
          onClick={() => {
            dispatch(addLocation(location));
          }}
        >
          {location.label.text}
        </List.Item>
      ))}
    </div>
  );
});

export default Search;
