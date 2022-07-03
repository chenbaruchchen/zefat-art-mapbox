import ReactMapGL, { Marker, Popup } from "react-map-gl";

const CustomPopup = (props) => {
  return (
    <Popup
      longitude={35.50077022102684}
      latitude={32.96614971634972}
      onClose={() => props.setPopUpdData(null)}
      // closeButton={true}
      // closeOnClick={false}
      offsetTop={-30}
    >
      <p>{props.name}</p>
    </Popup>
  );
};

export default CustomPopup;
