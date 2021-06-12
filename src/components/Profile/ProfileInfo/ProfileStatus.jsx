import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                    <p onDoubleClick={this.activateEditMode}
                       className={s.text}>Статус:<span>{this.props.myStatus}</span>
                    </p>
                }
                {this.state.editMode &&
                    <input onBlur={this.deactivateEditMode}
                           className={s.input}
                           value={this.props.myStatus}
                           autoFocus={true}/>
                }
            </div>
        );
    }
}

export default ProfileStatus;