import React, { useEffect, useState } from 'react';


const MyCombo = ({data,onSelect}) => {

	const [currentValue,setCurrentValue] = useState();

	const handleSelect = ({target}) => {
		setCurrentValue(target.value);
		if(onSelect){
			onSelect(target.value);
		}
	};

	const items = data.map((name,index) => <option key={`${index}`} value={name}>{name}</option>);
	return(
		<>
			<label>
				Pick your favorite Number:
				<select value={currentValue} onChange={handleSelect}>
					{items}
				</select>
			</label>
		</>
	)
}


const MyComp = ({data = null}) => {

	const [current,setCurrent] = useState(null);
	const [results,setResults] = useState(null);

	useEffect(() => {
		setResults(data[current]);
	},[data,current]);

	if(!data){
		return (
			<div>
				no data
			</div>
		);
	};

	
	const handleSelect = (value) => {
		setCurrent(value);
	}

	return (
		<div>
			<div>
				<MyCombo data={Object.keys(data)} onSelect={handleSelect} />
			</div>
			<div>
				{results && results.values && <div>values: {results.values}</div>}
			</div>
		</div>
	)
}

export { MyComp };
