import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (evt) => {
        this.setState({
            status: evt.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevStatus) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <p className={s.text}>Статус:
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || "please click here and input status"}
                        </span>
                    </p>
                }
                {this.state.editMode &&
                    <input className={s.input} 
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                           autoFocus={true}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;