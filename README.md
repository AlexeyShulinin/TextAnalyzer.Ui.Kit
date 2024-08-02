# Small React component library for Text Analyzer Tool 

Such library include Button, Input, Label, Select, TextArea, Form components

## Example of usage:

```js
import { Button } from 'text-analyzer-ui-kit';

const App = () => {
    return (
        <>
            <Button
                type="button"
                label="Click on me"
                variant="secondary"
                size="large"
                onClick={() => console.log('clicked')}
            />
        </>
    );
}
```

## For more details see storybook:

```
npm run storybook dev
```
