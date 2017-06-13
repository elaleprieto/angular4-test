import { Component, OnInit } from '@angular/core';
import { Item } from "app/item";

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	private itemDragStart: Item;
	private items: Item[] = [
		{id: 1, posicion: 1, name: 'Item 1'},
		{id: 2, posicion: 2, name: 'Item 2'},
		{id: 3, posicion: 3, name: 'Item 3'},
		{id: 4, posicion: 4, name: 'Item 4'},
		{id: 5, posicion: 5, name: 'Item 5'}
	]

	constructor() { }

	ngOnInit() {
	}

	onDragStart(event, item) {
		this.itemDragStart = item
	}

	onDrop(event, item: Item) {
		this.moveRow(this.itemDragStart.posicion, item.posicion);
	}
	
	private moveRow(src, trg) {
		src = parseInt(src);
		trg = parseInt(trg);
		const srcParsed = src - 1;
		const trgParsed = trg - 1;
		
		// If the element was moved down
		if (src > trg) {
			for (let i = trgParsed; i < srcParsed; i++) {
				this.items[i].posicion++;
			}
		} else {  // if the element was moved up
			for (let i = srcParsed + 1; i <= trgParsed; i++) {
				this.items[i].posicion--;
			}
		}
		this.items[srcParsed].posicion = trg;
		return this.items.sort((a, b) => a.posicion - b.posicion);
	}

}
