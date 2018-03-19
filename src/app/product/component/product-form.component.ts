import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
    selector: 'app-product-form',
    template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
        <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Product Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="name" placeholder="Product Name" formControlName="name">
            </div>
        </div>
        <div class="form-group row">
            <label for="price" class="col-sm-2 col-form-label">Product Price</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="price" placeholder="Product Price" formControlName="price">
            </div>
        </div>

        <div class="form-group row float-right">
            <div class="col-sm-2">
                <button type="submit" class="btn btn-primary" [disabled]="!form.valid">Submit</button>
            </div>
        </div>
    </form>
    `,
    styles: [``],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnChanges {

    form: FormGroup;

    @Input() product: Product = new Product();
    @Output() formSubmit: EventEmitter<Product> = new EventEmitter();

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            'id': [this.product.id || undefined],
            'name': [this.product.name || '', Validators.required],
            'price': [this.product.price || '', Validators.required]
        });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (!!changes['product'] && !!this.product) {
            this.form.setValue(this.product);
        }
    }

    onSubmit() {
        if (this.form.valid) {
            this.formSubmit.emit(this.form.value);
            this.form.reset();
        }
    }
}
