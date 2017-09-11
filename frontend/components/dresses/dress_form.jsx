import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

export default class DressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.id) { // editing existing dress
      this.props.fetchDress()
        .then(() => {this.setState(this.props.dress)  })
    }
  }

  handleChange(field) {
    return (e, i, val) => {
      this.setState({[field]: val || e.target.value})
    }
  }

  handleRangeChange(field, deviations) {
    return (e, i, val) => {
      val = parseFloat(val || e.target.value);
      this.handleChange(field)(null, null, val);
      this.handleChange('min_' + field)(null, null, val + deviations[0]);
      this.handleChange('max_' + field)(null, null, val + deviations[1]);
    }
  }

  handleFileChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({image: reader.result});
    }

    reader.readAsDataURL(file)
  }

  handleSubmit() {
    this.props.submit(this.state)
      .then(res => this.props.history.push(`/dresses/${this.props.id || Object.keys(res)[0]}`));
  }

  render() {
    const errors = this.props.errors;
    return (
      <Paper zDepth={2} className="dress-form">
        <form>
          <TextField
            fullWidth={true}
            floatingLabelText="Bar code"
            onChange={this.handleChange('barcode')}
            value={this.state.barcode || this.props.barcode }
            errorText={ errors ? errors.barcode : '' }
            />

          <TextField
            fullWidth={true}
            floatingLabelText="Title"
            onChange={this.handleChange('title')}
            value={this.state.title || this.props.title }
            errorText={ errors ? errors.title : '' }
            />

          <TextField
            fullWidth={true}
            floatingLabelText="Color"
            onChange={this.handleChange('color')}
            value={this.state.color || this.props.color }
            errorText={ errors ? errors.color : '' }
            />

          <TextField
            fullWidth={true}
            floatingLabelText="Description"
            onChange={this.handleChange('description')}
            value={this.state.description || this.props.description }
            errorText={ errors ? errors.description : '' }
            />

          <TextField
            floatingLabelText="Waist"
            onChange={this.handleRangeChange('waist', [-1.5, 1.5])}
            value={this.state.waist || this.props.waist }
            errorText={ errors ? errors.waist : '' }
            />

          <TextField
            floatingLabelText="Min Waist"
            onChange={this.handleChange('min_waist')}
            value={this.state.min_waist || this.props.min_waist || (this.state.waist && this.state.waist - 1.5)}
            errorText={ errors ? errors.min_waist : '' }
            />

          <TextField
            floatingLabelText="Max Waist"
            onChange={this.handleChange('max_waist')}
            value={this.state.max_waist || this.props.max_waist || (this.state.waist && parseFloat(this.state.waist) + 1.5)}
            errorText={ errors ? errors.max_waist : '' }
            />

          <TextField
            floatingLabelText="Height"
            onChange={this.handleChange('height')}
            value={this.state.height || this.props.height}
            errorText={ errors ? errors.height : '' }
            />


          <SelectField
            fullWidth={true}
            floatingLabelText="Sleeve Length"
            value={this.state.sleeve_length}
            onChange={this.handleChange('sleeve_length')}
            >
            <MenuItem value={'long'} primaryText="Long" />
            <MenuItem value={'half length'} primaryText="Half Length" />
            <MenuItem value={'3 / 4'} primaryText="3 / 4" />
          </SelectField>

          <TextField
            type="file"
            fullWidth={false}
            onChange={this.handleFileChange}
            errorText={ errors ? errors.description : '' }
            />
          {
            this.state.image || this.state.img ? (
              <Avatar src={this.state.image || this.state.img}/>
            ) : null
          }
          <br />
          <RaisedButton
            label="Save"
            primary={true}
            onClick={this.handleSubmit}
            />
        </form>

      </Paper>
    )
  }
}
