const Renderer = require('../../lib/Renderer');

jest.mock('../../lib/requireTemplate', () => {
  const {
    Mjml, MjmlHead, MjmlTitle, MjmlBody, MjmlSection, MjmlColumn, MjmlText, MjmlRaw,
  } = require('mjml-react');
  const React = require('react');

  const Template = () => () => (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Mock Title</MjmlTitle>
      </MjmlHead>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText>
              Mock Text
            </MjmlText>

            <MjmlRaw>
              Mock Raw Text
            </MjmlRaw>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );

  Template.getInitialProps = jest.fn();

  Template.getSubject = jest.fn();

  Template.getHeaders = jest.fn();

  return Template;
});

describe('lib/Renderer', () => {
  it('should use process.cwd() for the root directory by default', () => {
    const renderer = new Renderer();

    expect(renderer.rootDirectory).toBe(process.cwd());
  });

  it('should override the default root', () => {
    const renderer = new Renderer({ rootDirectory: 'fake-root-directory' });

    expect(renderer.rootDirectory).toBe('fake-root-directory');
  });

  describe('renderEmail', () => {
    it('should error if the template does not exist', async () => {
      const renderer = new Renderer({ rootDirectory: __dirname });

      await expect(renderer.renderEmail('module-name')).resolves.toEqual({

      });
    });
  });
});
