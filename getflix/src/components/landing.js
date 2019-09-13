import React from 'react';
import { Link } from 'react-router-dom';

function landing() {
    return( <div>
    
            <Link to="/view">
                <div className="btn btn-primary">View Movies/Tv</div>
            </Link>

        </div>

    );
}

export default landing;