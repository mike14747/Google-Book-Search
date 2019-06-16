import React from 'react';

function Error() {
    const styles = {
        backgroundColor: "#ffffff"
    };

    return (
        <div style={styles}>
            <h3 className="p-2 text-danger">Error 404... the requested page does not exist!</h3>
        </div>
    );
}

export default Error;