#if 0
#include "config.h"
#include "GraphicsLayer.h"
#include "GraphicsLayerCairo.h"
#include "IntSize.h"
#include "FloatRect.h"
#include "DebuggerJS.h"

namespace WebCore {

std::unique_ptr<GraphicsLayer> GraphicsLayer::create(GraphicsLayerFactory* factory, GraphicsLayerClient* client)
{
//	GraphicsLayer *layer =
//	if (!factory)
		return std::unique_ptr<GraphicsLayer>(new GraphicsLayerCairo(client));
//	else return nullptr;
	//return factory->createGraphicsLayer(client);
}

void GraphicsLayerCairo::setNeedsDisplay() {
	setNeedsDisplayInRect(FloatRect(FloatPoint(), size()),  GraphicsLayer::ClipToLayer);
}

void GraphicsLayerCairo::setNeedsDisplayInRect(const FloatRect& r, ShouldClipToLayer shouldClip = ClipToLayer) {
	if (!drawsContent())
		return;

	FloatRect rect(r);
	if (shouldClip == ClipToLayer) {
		FloatRect layerBounds(FloatPoint(), m_size);
		rect.intersect(layerBounds);
	}

	if (rect.isEmpty())
		return;

	const size_t maxDirtyRects = 32;

	for (size_t i = 0; i < m_dirtyRects.size(); ++i) {
		if (m_dirtyRects[i].contains(rect))
			return;
	}

	if (m_dirtyRects.size() < maxDirtyRects)
		m_dirtyRects.append(rect);
	else
		m_dirtyRects[0].unite(rect);

	m_client->notifyFlushRequired(this);

	addRepaintRect(rect);
}

}
#endif