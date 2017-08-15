import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CurrencyInput from 'react-currency-input';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class DressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger
    if (this.props.id) {
      this.props.fetchDress().then(() => this.setState(this.props.dress))
    }
  }

  handleChange(field) {
    return (e, i, val) => {
      this.setState({[field]: e.target.value || val})
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
    const dress = this.state;
    dress.price = this.formatPrice()
    this.props.submit(dress)
      .then(() => console.log(dress))
  }

  formatPrice() {
    debugger;
    const price = this.state.price.replace(/[.,$]/g, '');
    return parseInt(price, 10);
  }

  render() {
    const errors = this.props.errors;
    console.log(this.state)
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
            fullWidth={true}
            floatingLabelText="Price"
            >
            <CurrencyInput
              value={this.state.price}
              onChangeEvent={this.handleChange('price')}
              prefix="$"
              />
          </TextField>

          <TextField
            floatingLabelText="Waist"
            onChange={this.handleChange('waist')}
            value={this.state.waist || this.props.waist }
            errorText={ errors ? errors.waist : '' }
            />

          <TextField
            floatingLabelText="Min Waist"
            onChange={this.handleChange('min_waist')}
            value={this.state.min_waist || this.props.min_waist || (this.state.waist && this.state.waist)}
            errorText={ errors ? errors.min_waist : '' }
            />

          <TextField
            floatingLabelText="Waist Stretch"
            onChange={this.handleChange('max_waist')}
            value={this.state.max_waist || this.props.max_waist || (this.state.waist && this.state.waist + '.5')}
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
            fullWidth={true}
            onChange={this.handleFileChange}
            errorText={ errors ? errors.description : '' }
            />
          {
            this.state.image || this.state.img? (
              <img src={this.state.image || this.state.img}/>
            ) : null
          }
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
