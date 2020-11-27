import React from 'react';

export default ({ input, label, meta}) => { 
    console.log(meta)
     return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px' }}/>
            <div style={{margineBottom: '20px', color: 'red'}}>
                 {meta.touched && meta.error}
            </div>
        </div>
    );
};
