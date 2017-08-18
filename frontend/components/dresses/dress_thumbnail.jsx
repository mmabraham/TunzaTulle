import React from 'react';
import Avatar from 'material-ui/Avatar';

const DressThumbnail = ({dress}) => (
  <div>
    <Avatar src={dress.img} />
    <span style={{position: 'relative', bottom: 10, left: 5}} >
      {dress.barcode}
    </span>
    <br />
    <span style={{paddingTop: 0}}>{dress.title}</span>
  </div>
);

export default DressThumbnail;
