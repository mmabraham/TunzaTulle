import React from 'react';
import TextField from 'material-ui/TextField';

export default class DressForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleFileChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result,
      });
    }

    reader.readAsDataURL(file)
  }

  handleSubmit() {
    this.submit(state);
  }

  render() {
    const errors = this.props.errors;
    console.log(this.state)
    return (
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

      add color select here

        <TextField
          fullWidth={true}
          floatingLabelText="Description"
          onChange={this.handleChange('description')}
          value={this.state.description || this.props.description }
          errorText={ errors ? errors.description : '' }
        />


      add image here
      add price here

      add all measurements
      add sleeve_length

      <TextField
        type="file"
        fullWidth={true}
        onChange={this.handleFileChange}
        errorText={ errors ? errors.description : '' }
      />
    {
      this.state.imagePreviewUrl ? (
        <img src={this.state.imagePreviewUrl}/>
      ) : null
    }
      </form>
    )
  }
}
