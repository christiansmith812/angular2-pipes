# How to use...

- keys.pipe.ts
```typescript
foo = {'a': 1, 'b': 'example', 3: 'anything'}
...
<ng-container *ngFor="let item of foo | keys">
  {{foo.key}} - {{foo.value}}
</ng-container>
```

- log.pipe.ts
```typescript
foo = Math.floor(Math.random() * Math.floor(3))
...
{{ foo | log }}
```

- number.format.pipe.ts
```typescript
foo = 123456.891
...
{{ foo | numberFormat }}
{{ foo | numberFormat : 2 : '.' : ',' }}
```

- safe.html.pipe.ts
```typescript
foo = '<input type="text" name="name">';
...
<div [innerHTML]="foo | safeHtml"></div>
```

- time.ago.pipe.ts
```typescript
foo = '2018-02-07 12:23:35';
...
{{foo | timeAgo}}
```
