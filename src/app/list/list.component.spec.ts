import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Item } from "app/item";

describe('ListComponent', () => {
	let component: ListComponent;
	let fixture: ComponentFixture<ListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should moved row 1 to position 3', () => {
		// Arrange
		let items: Item[] = [
			{id: 1, posicion: 1, name: 'Item 1'},
			{id: 2, posicion: 2, name: 'Item 2'},
			{id: 3, posicion: 3, name: 'Item 3'},
			{id: 4, posicion: 4, name: 'Item 4'},
			{id: 5, posicion: 5, name: 'Item 5'}
		];
		const itemsResult: Item[] = [
			{id: 2, posicion: 1, name: 'Item 2'},
			{id: 3, posicion: 2, name: 'Item 3'},
			{id: 1, posicion: 3, name: 'Item 1'},
			{id: 4, posicion: 4, name: 'Item 4'},
			{id: 5, posicion: 5, name: 'Item 5'}
		];
		component['items'] = items;

		// Act
		const result = component['moveRow'](1,3);

		// Assert
		expect(result).toBeTruthy();
		expect(result).toEqual(itemsResult);
	});
	
	it('should moved row 4 to position 2', () => {
		// Arrange
		let items: Item[] = [
			{id: 1, posicion: 1, name: 'Item 1'},
			{id: 2, posicion: 2, name: 'Item 2'},
			{id: 3, posicion: 3, name: 'Item 3'},
			{id: 4, posicion: 4, name: 'Item 4'},
			{id: 5, posicion: 5, name: 'Item 5'}
		];
		const itemsResult: Item[] = [
			{id: 1, posicion: 1, name: 'Item 1'},
			{id: 4, posicion: 2, name: 'Item 4'},
			{id: 2, posicion: 3, name: 'Item 2'},
			{id: 3, posicion: 4, name: 'Item 3'},
			{id: 5, posicion: 5, name: 'Item 5'}
		];
		component['items'] = items;

		// Act
		const result = component['moveRow'](4,2);

		// Assert
		expect(result).toBeTruthy();
		expect(result).toEqual(itemsResult);
	});
});
