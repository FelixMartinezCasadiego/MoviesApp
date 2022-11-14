export interface MoviesInformation {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}

export interface Result {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface TrendingPeopleInformation {
    page:          number;
    results:       ResultTrendingPeople[];
    total_pages:   number;
    total_results: number;
}

export interface ResultTrendingPeople {
    adult:                boolean;
    gender:               number;
    id:                   number;
    known_for:            any[];
    known_for_department: string;
    name:                 string;
    popularity:           number;
    profile_path:         string;
}