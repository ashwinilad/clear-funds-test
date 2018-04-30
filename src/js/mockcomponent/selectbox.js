import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import '../../css/selectbox.css';

var CreatableDemo = createClass({
	displayName: 'CreatableDemo',
	propTypes: {
		label: PropTypes.string
	},
	getInitialState () {
		return {
			multi: true,
			multiValue: [],
			options: [
				{ value: 'R', label: 'Red' },
				{ value: 'G', label: 'Green' },
				{ value: 'B', label: 'Blue' },
				{ value: 'O', label: 'Orange' },
				{ value: 'P', label: 'Purple' },
				{ value: 'W', label: 'White' },
				{ value: 'V', label: 'Violet' },
			],
			value: undefined
		};
	},
	handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
	},
	render () {
		const { multi, multiValue, options, value } = this.state;
		return (
			<div className="container">
				<div className="select_box_wrapper">
					<div className="section">
						<Select.Creatable
							multi={multi}
							options={options}
							onChange={this.handleOnChange}
							value={multi ? multiValue : value}
						/>
					</div>
				</div>
			</div>
		);
	}
});

export default CreatableDemo;