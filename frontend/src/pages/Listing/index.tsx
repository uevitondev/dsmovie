import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {
    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col xl-3 col-xxl-2 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;