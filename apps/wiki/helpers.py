import difflib
from difflib import HtmlDiff

from jingo import register
import jinja2

from wiki import DIFF_WRAP_COLUMN
from wiki import parser


@register.function
def diff_table(content_from, content_to, row_width=DIFF_WRAP_COLUMN):
    """Creates an HTML diff of the passed in content_from and content_to."""
    html_diff = HtmlDiff(wrapcolumn=row_width)
    diff = html_diff.make_table(content_from.splitlines(),
                                content_to.splitlines(), context=True)
    return jinja2.Markup(diff)


@register.function
def unified_diff(content_from, content_to):
    unified_diff = difflib.unified_diff(content_from.splitlines(),
                                        content_to.splitlines())

    markup = '<pre>'
    for line in unified_diff:
        markup += line
    markup += '</pre>'
    import pdb; pdb.set_trace()

    return jinja2.Markup(markup)


@register.function
def generate_video(v):
    return jinja2.Markup(parser.generate_video(v))
