import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import AlertError from 'material-ui/svg-icons/alert/error';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';

const DressThumbnail = ({dress, isAvailable, onRemove}) => (
  <Chip
    onRequestDelete={onRemove}
    style={isAvailable() ? {} : {border: '2px solid red', minWidth: 200} }
    >
    <Avatar src={dress.img} style={{borderRadius: '13%', height: '100', width: '80'}}/>
    <span style={{position: 'relative', bottom: 10, left: 5}} >
      {dress.barcode}
    </span>
    <br />
    <span style={{paddingTop: 0}}>{dress.title}</span>
      {
        isAvailable() ? (
          <ActionCheckCircle color="green"/>
        ) : (
          <div>
            <span style={{color: 'red'}} >
              Not available!
            </span>
            <AlertError color="red"/>
          </div>
        )
      }
  </Chip>
);

export default DressThumbnail;
