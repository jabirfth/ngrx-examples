import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
    selector: 'app-product-table',
    template: `
    <div class="table-responsive">
        <table class="table table-sm table-bordered table-hover ">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let p of products">
            <th scope="row">{{p.id}}</th>
            <td>{{p.name}}</td>
            <td>{{p.price}}</td>
            <td>
                <a class="btn btn-sm btn-warning" (click)="onEdit(p.id)">
                <i class="fa fa-edit"></i>
                </a>
                <a class="btn btn-sm btn-danger" (click)="onDelete(p.id)">
                <i class="fa fa-trash"></i>
                </a>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
    @Input() products: Product[];
    @Output() edit: EventEmitter<number> = new EventEmitter();
    @Output() delete: EventEmitter<number> = new EventEmitter();

    onEdit(pId: number) {
        this.edit.emit(pId);
    }

    onDelete(pId: number) {
        this.delete.emit(pId);
    }
}
