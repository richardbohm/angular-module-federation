import { Component, computed, DestroyRef, inject, OnInit, signal, ViewContainerRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface FormData {
  name: string,
  age: number
}

@Component({
  standalone: true,
  imports: [
  ],
  selector: 'app-view',
  template: `
    <div>2. option viewContainer</div>
    @if (remoteData()) {
      <div>received from parent: {{ compData() }}</div>
    }
  `,
  styles: `
  `,
})
export class ViewComponent implements OnInit{
  title = 'view';
  destroyRef = inject(DestroyRef)
  remoteData = signal<FormData | null>(null)
  compData = computed(() => `Name: ${this.remoteData()?.name}  Age: ${this.remoteData()?.age} `)

  constructor(private viewRef: ViewContainerRef) {
    //import('remote/component').then(c => c.RemoteEntryComponent).then(c => viewRef.createComponent(c))
  }


  async ngOnInit() {
    const comp = await import('remote/component').then(c => c.RemoteEntryComponent)
    const instance = this.viewRef.createComponent(comp)
    instance.instance.data.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
      console.log('data received to parent component ', data)
      this.remoteData.set(data)
    })
  }


}
