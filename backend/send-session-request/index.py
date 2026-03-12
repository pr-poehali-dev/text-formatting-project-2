import json
import os
import urllib.request
import urllib.parse


def handler(event, context):
    """Отправка заявки на стратегическую сессию в Telegram"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    cors_headers = {'Access-Control-Allow-Origin': '*'}

    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Method not allowed'}),
        }

    raw_body = event.get('body') or '{}'
    if isinstance(raw_body, dict):
        body = raw_body
    else:
        parsed = json.loads(raw_body)
        if isinstance(parsed, str):
            parsed = json.loads(parsed)
        body = parsed
    name = body.get('name', '').strip()
    company = body.get('company', '').strip()
    phone = body.get('phone', '').strip()
    channel = body.get('channel', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': cors_headers,
            'body': json.dumps({'error': 'name and phone are required'}),
        }

    channel_labels = {
        'whatsapp': 'WhatsApp',
        'telegram': 'Telegram',
        'max': 'MAX',
        'phone': 'Телефон',
    }

    lines = [
        '📋 Новая заявка на стратегическую сессию',
        '',
        f'👤 ФИО: {name}',
    ]
    if company:
        lines.append(f'🏢 Компания: {company}')
    lines.append(f'📞 Телефон: {phone}')
    if channel:
        lines.append(f'💬 Канал связи: {channel_labels.get(channel, channel)}')

    text = '\n'.join(lines)

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = json.dumps({'chat_id': chat_id, 'text': text}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    resp = urllib.request.urlopen(req)
    result = json.loads(resp.read())

    if not result.get('ok'):
        return {
            'statusCode': 500,
            'headers': cors_headers,
            'body': json.dumps({'error': 'Failed to send message'}),
        }

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'success': True}),
    }