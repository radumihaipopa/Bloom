import React from 'react';

import Popular from '../Popular/Popular'
import '../../App.css';

class NotFound extends React.Component {
    render() {
        const { movies } = this.props;

        return (
            <div>
                <h3 className="title">
                    Eroare 404: Pagina solicitată nu există.
                </h3>
                <Popular movies={movies} />
            </div>
        );
    }
}

export default NotFound;