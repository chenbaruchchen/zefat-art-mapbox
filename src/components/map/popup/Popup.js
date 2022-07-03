import ReactMapGL, { Marker, Popup } from "react-map-gl";
import PopupUi from "./popupui";
const CustomPopup = (props) => {
  return (
    <Popup
      className=""
      longitude={35.50077022102684}
      latitude={32.96614971634972}
      onClose={() => props.setPopUpdData(null)}
      // closeButton={true}
      // closeOnClick={false}
      offsetTop={-30}
    >
      <PopupUi />
    </Popup>
  );
};

export default CustomPopup;
