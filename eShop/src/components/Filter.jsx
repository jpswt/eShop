import '../scss/styles/Filter.css';

const Filter = ({
	filters,
	sort,
	setSort,
	handleFilter,
	options,
	category,
}) => {
	return (
		<div className="filter">
			<h2>{category.toUpperCase()}</h2>
			<div className="filter-container">
				<div className="filter-item">
					<label>Filter Products:</label>
					<select name="manufacturer" id="manufacturer" onChange={handleFilter}>
						<option value="">All Brands</option>
						{options.map((option, index) => (
							<option key={index} value={option.value}>
								{option.value}
							</option>
						))}
					</select>
				</div>
				<div className="filter-item">
					<label>Sort Products:</label>
					<select onChange={(e) => setSort(e.target.value)}>
						<option value="latest">Latest</option>
						<option value="asc">Price Asc</option>
						<option value="desc">Price Desc</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Filter;
