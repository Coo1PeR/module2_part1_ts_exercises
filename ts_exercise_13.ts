// *

// This enables module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    const pad: (ident: number) => string;

    // Add your module extensions here.
    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}