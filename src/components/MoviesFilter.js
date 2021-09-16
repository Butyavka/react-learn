import React from 'react';
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import '../styles/search.css'
import '../styles/sort-movies.css'

const MoviesFilter = ({filter, setFilter}) => {
    return (
        <div className='filter'>
            <div className='sort__box'>
                <Select
                    defaultValue='Сортировка по'
                    options={[
                        {value:'title', name: 'По названию'},
                        {value:'year', name: 'По году выхода'}
                    ]}
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    selectClass='sort__select'
                />
            </div>
            <div className='search__box'>
                <Input value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} inputPlaceholder='Поиск' inputClass='search__input'/>
                <Button onClick={e => setFilter({...filter, query: ''})} buttonClass='search__button' text='Очистить'/>
            </div>
        </div>
    );
};

export default MoviesFilter;