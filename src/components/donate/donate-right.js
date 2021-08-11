import React,{Component} from 'react';
import Radio from '@material-ui/core/Radio';
import { FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
export default class DonateRight extends Component {
  render() {
    return (
    <div className="donate-right">
      <div className="form-wrap">
        <h1>Donate</h1>
        <FormControl component="fieldset">

          <RadioGroup >
            <FormControlLabel value="1000" control={<Radio />} label="1000  (1-20 Meals)" />
            <FormControlLabel value="2000" control={<Radio />} label="2000  (20-40 Meals)" />
            <FormControlLabel value="3000" control={<Radio />} label="3000  (40-60 Meals)" />
            <FormControlLabel value="5000" control={<Radio />} label="5000  (60-80 Meals)" />
            <FormControlLabel value="7500" control={<Radio />} label="7500  (120-150 Meals)" />
            <FormControlLabel value="10000" control={<Radio />} label="10000  (200-250 Meals)" />
          </RadioGroup>
          <div className="custom-value">
            <TextField id="outlined-basic"  variant="standard" placeholder="enter a custom value" />
          </div>
          <Button size="small"  variant="contained" color="primary"> Primary </Button>
        </FormControl>
      </div>
    </div>
    );
  }
}