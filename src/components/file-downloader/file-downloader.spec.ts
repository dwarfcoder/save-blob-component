import { flush, render } from '@stencil/core/testing';
import { SaveBlobComponent } from './file-downloader';

describe('file-downloader', () => {
    it('should build', () => {
        expect(new SaveBlobComponent()).toBeTruthy();
    });

    describe('rendering', () => {
        let element;
        beforeEach(async () => {
            global.fetch = jest.fn().mockImplementation(() => {
                return {
                    then: (b) => {
                        return {
                            ok: true,
                            blob: b
                        }
                    },
                    catch: (err) => {
                        console.log(err);
                        return;
                    }
                };
            });

            element = await render({
                components : [SaveBlobComponent],
                html: '<file-downloader></file-downloader>'
            });
        });

        it(`Shouldn't work without parameters`, () => {
            expect(element.textContent.trim()).toEqual("");
        });

        it('Should fetch data', () => {
            let blob;
            element.makeRequest('https://www.gstatic.com/earth/social/00_generic_facebook-001.jpg')
            .then((b) => {
                blob = b
            });

            expect(blob !== null);
        });

        it('Should fail if no URL provided', () => {
            let blob, error;
            element.makeRequest()
            .then((b) => {
                blob = b
            })
            .catch(err => {
                error = err;
            });

            expect(error !== null);
        });
    });

});

