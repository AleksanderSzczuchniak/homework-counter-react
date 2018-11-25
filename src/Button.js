import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    margin: 10,
}

const Button = (props) => (
    <div>
        <RaisedButton
            label={props.label}
            primary={true}
            onClick={props.onClick}
            style={style}

        />
    </div>
)

export default Button